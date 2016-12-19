import angular from 'angular';

import {App} from './app/components/App';
import {FormError} from './app/components/FormError';

import './index.scss';

angular
  .module('app', [])
  .component('app', App)
  .component('formError', FormError);
