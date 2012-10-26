/***************************************************************************
 * 
 * Copyright (c) 2012 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * a.js ~ 2012/10/26 14:24:18
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/

/**
 * @constructor
 */
function Parent() {
    /**
     * @type {string}
     * @private
     */
    this._name = 'Parent';
}

/**
 * Parent's age.
 * @private
 * @type {number}
 */
Parent.prototype._age = 10;

/**
 * @param {string} name 名字.
 * @param {number} age 年龄.
 */
Parent.prototype.foo = function(name, age) {
    // TODO
}

/**
 * @constructor
 * @extends {Parent}
 */
function Child() {
}

/** @inheritDoc */
Child.prototype.foo = function(name, age) {
    alert('My name is ' + name + ', my age is ' + age);
}

/**
 * @constructor
 * @extends {Child}
 */
function MyClass() {
}

/** @inheritDoc */
MyClass.prototype.foo = function(name, age) {
    alert('My type is `MyClass`, my name is ' + name + ', my age is ' + age);
}



















/* vim: set ts=4 sw=4 sts=4 tw=100 noet: */
