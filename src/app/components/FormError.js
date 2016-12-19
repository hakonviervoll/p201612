class FormErrorController {
}

export const FormError = {
  template: require('./FormError.html'),
  controller: FormErrorController,
  bindings: {
    name: '@',
    form: '<',
    messages: '<'
  }
};
