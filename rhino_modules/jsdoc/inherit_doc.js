/***************************************************************************
 * 
 * Copyright (c) 2012 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * rhino_modules/jsdoc/inherit_doc.js ~ 2012/10/26 13:59:17
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 * 处理inheritDoc相关的内容
 **/


var doop = require("jsdoc/util/doop").doop;

var _cache = {};

/**
 * @function
 * @param {string} className 子类的名称.
 * @param {Array.<jsdoc.doclet.Doclet>} docs 解析之后的Doclet文档.
 */
var getInheritsChain = exports.getInheritsChain = function(className, docs) {
    if (_cache[className]) {
        return _cache[className];
    }

    var chains = [];
    chains.push(className);
    while(true) {
        var rv = null;
        for(var i = 0, j = docs.length; i < j; i ++) {
            if (docs[i].kind === 'class' && docs[i].longname === className) {
                rv = docs[i];
                break;
            }
        }
        if (rv && rv.augments && rv.augments.length) {
            className = rv.augments[0];
            chains.push(className);
        } else {
            break;
        }
    }

    return (_cache[className] = chains);
}

/**
 * @param {string} fName The function name.
 * @param {string} parentClassName The parent class name.
 * @param {Array.<jsdoc.doclet.Doclet>} docs 解析之后的Doclet文档.
 */
function getNodeMeta(fName, parentClassName, docs) {
    var doc;
    for(var i = 0; doc = docs[i++]; ){
        if (doc.memberof === parentClassName &&
            doc.kind === 'function' &&
            doc.name === fName &&
            (doc.params || doc.description)) {
            return doc;
        }
    }

    return null;
}

/**
 * 主要目的是遍历所有具备@inheritDoc属性的Doclet, 然后补充上必须的内容
 * @function
 * @param {Array.<jsdoc.doclet.Doclet>} docs 解析之后的Doclet文档.
 */
var resolveInheritDoc = exports.resolveInheritDoc = function(docs) {
    docs.forEach(function(doc, index){
        if (doc.inheritDoc === true &&
            doc.kind === 'function' &&
            doc.memberof &&
            doc.memberof != '<global>' &&
            !(doc.params && doc.description)) {

            var chains = getInheritsChain(doc.memberof, docs);
            if (chains.length > 1) {
                var node = null;
                for(var i = 1; !node && i < chains.length; i ++) {
                    node = getNodeMeta(doc.name, chains[i], docs);
                }
                if (node) {
                    if (node.params) {
                        doc.params = doop(node.params);
                    }
                    if (node.description) {
                        doc.description = doop(node.description);
                    }
                }
            }
        }
    });
}




















/* vim: set ts=4 sw=4 sts=4 tw=100 noet: */
