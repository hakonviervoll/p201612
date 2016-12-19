class AppController {
  /** @ngInject */
  constructor() {
    this.formData = {};
    this.price = 0;
  }

  handleSubmit(form) {
    if (form.$valid) {
      this.price = this.formData.fnr.slice(-3);
    }
  }

  handleCancel(form) {
    this.price = 0;

    if (form) {
      form.$setPristine();
      form.$setUntouched();

      angular.copy({}, this.formData);
    }
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
