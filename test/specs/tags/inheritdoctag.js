/***************************************************************************
 * 
 * Copyright (c) 2012 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * inheritdoctag.js ~ 2012/10/25 14:07:45
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/
describe("@inheritdoc tag", function() {
    var docSet = jasmine.getDocSetFromFile('test/fixtures/inheritdoctag.js'),
        foo = docSet.getByLongname('foo')[0];

    it('When a symbol has an @inheritdoc tag, the doclet has a version property set to that value.', function() {
        expect(foo.inheritDoc).toEqual(true);
    });
});




















/* vim: set ts=4 sw=4 sts=4 tw=100 noet: */
