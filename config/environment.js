// Put general configuration here. This file is included
// in both production and development BEFORE Ember is
// loaded.
//
// For example to enable a feature on a canary build you
// might do:
//
// window.ENV = {FEATURES: {'with-controller': true}};

window.ENV = window.ENV || {};

window.ENV.MODEL_FACTORY_INJECTIONS = true;

window.ENV.NAMESPACE = 'api';