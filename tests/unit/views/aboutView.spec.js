
import AboutView from '@/views/AboutView'
import { shallowMount } from "@vue/test-utils";

describe('AboutView Component', () => {
    
    test('debe de renderizar el componente correctamente', () => {

        const wrapper = shallowMount( AboutView )
        expect(wrapper.html()).toMatchSnapshot();

      });

});