import { mount } from '@vue/test-utils';
import Vue from 'vue';

import VueParallax from '../../src/index';

describe('VueParallax', () => {
    it('exists', () => {
        expect(VueParallax).toBeTruthy();
    });

    it('is named correctly', () => {
        expect(VueParallax.name).toBe('vue-parallax');
    });

    describe('default props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(VueParallax);
        });

        it('has a default distance of 300px', () => {
            expect(wrapper.vm.distance).toBe('300px');
        });
    });

    describe('when mounted', () => {
        let wrapper;
        let mockRect;
        const distance = '100px';

        beforeEach(() => {
            mockRect = {};
            Object.assign(window, { innerHeight: 1000 });

            wrapper = mount(VueParallax, {
                propsData: {
                    distance,
                },
            });

            jest.spyOn(wrapper.vm.$el, 'getBoundingClientRect')
                .mockImplementation(() => mockRect);
        });

        it('sets base values immediately', () => {
            expect(wrapper.vm.windowInnerHeight).toBe(1000);
            expect(wrapper.vm.boundingClientRect).toEqual(mockRect);
        });

        describe('on scroll', () => {
            beforeEach(() => {
                mockRect = {
                    top: 5,
                    height: 10,
                };
                Object.assign(window, { innerHeight: 20 });
                window.dispatchEvent(new Event('scroll'));
            });

            it('sets the base values', () => {
                expect(wrapper.vm.windowInnerHeight).toBe(20);
                expect(wrapper.vm.boundingClientRect).toEqual(mockRect);
            });
        });

        describe('on resize', () => {
            beforeEach(() => {
                mockRect = {
                    top: 10,
                    height: 20,
                };
                Object.assign(window, { innerHeight: 40 });
                window.dispatchEvent(new Event('resize'));
            });

            it('sets the base values', () => {
                expect(wrapper.vm.windowInnerHeight).toBe(40);
                expect(wrapper.vm.boundingClientRect).toEqual(mockRect);
            });
        });

        describe('on distance changed', () => {
            beforeEach(() => {
                mockRect = {
                    top: 20,
                    height: 40,
                };
                Object.assign(window, { innerHeight: 80 });
                wrapper.setProps({
                    distance: '500px',
                });
            });

            it('sets the base values', () => {
                expect(wrapper.vm.windowInnerHeight).toBe(80);
                expect(wrapper.vm.boundingClientRect).toEqual(mockRect);
            });
        });

        describe('before element is in view', () => {
            beforeEach(() => {
                mockRect = {
                    top: -100,
                    height: 100,
                };

                window.dispatchEvent(new Event('scroll'));
            });

            it('sets top to 0', () => {
                expect(wrapper.vm.top).toBe(`calc((1 * ${ distance }) - ${ distance })`);
            });

            it('sets bottom to negative distance', () => {
                expect(wrapper.vm.bottom).toBe(`calc(-1 * ${ distance })`);
            });
        });

        describe('after element is in view', () => {
            beforeEach(() => {
                mockRect = {
                    top: window.innerHeight,
                    height: 100,
                };

                window.dispatchEvent(new Event('scroll'));
            });

            it('sets top to negative distance', () => {
                expect(wrapper.vm.top).toBe(`calc((0 * ${ distance }) - ${ distance })`);
            });

            it('sets bottom to 0', () => {
                expect(wrapper.vm.bottom).toBe(`calc(0 * ${ distance })`);
            });
        });
    });
});
