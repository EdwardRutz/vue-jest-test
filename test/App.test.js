import { shallow } from 'vue-test-utils'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(App, { // Create a shallow instance of the component
      data: {
        messages: ['Cat']
      }
    })
  });

  it('equals messages to ["Cat"]', () => {
    // Within cmp.vm, we can access all Vue instance methods
    expect(cmp.vm.messages).toEqual(['Cat'])
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
});













// import Vue from 'vue'
// import App from '../src/App'
//
// describe('App.test.js', () => {
//   let cmp, vm;
//
//   beforeEach(() => {
//     cmp = Vue.extend(App); // Create a copy of the original component
//     vm = new cmp({
//       data: { // Replace data value with this fake data
//         messages: ['Cat']
//       }
//     }).$mount() // Instances and mounts the component
//   });
//
//   it('equals messages to ["Cat"]', () => {
//     expect(vm.messages).toEqual(['Cat'])
//   });
//
//   it('has the expected html structure', () => {
//     expect(vm.$el).toMatchSnapshot()
//   })
// });
