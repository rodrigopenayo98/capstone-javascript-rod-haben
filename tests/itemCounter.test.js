import {countNumberOfShows} from '../src/modules/utils';

describe('item counter test case for items in home page.', () => { 
    test('should update dom element with correct number of items.', () => {
        const domElement = document.createElement('p');
        const shows = [{ id: 1, name: 'test 1' }, { id: 2, name: 'test 2' }];
        countNumberOfShows(domElement, shows);
        expect(domElement.innerText).toBe(2);
     });
 })