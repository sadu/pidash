import { RAF, fetch } from './__helpers';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import { LocalStoragePolyfill } from '../helpers/utils';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.localStorage = LocalStoragePolyfill();

console.error = message => {
    throw new Error(message);
};
