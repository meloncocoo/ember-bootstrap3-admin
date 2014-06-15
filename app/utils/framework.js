/**
 * Created by melon on 14-6-1.
 */
var Framework = window.Framework = window.Framework == null ? Ember.Namespace.create({}) : window.Framework;

Framework.Utils = Ember.Object.create({
    foo: function() {
        alert('ok');
    }
});

export default Framework.Utils;