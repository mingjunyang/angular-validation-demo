'use strict';

//TODO:这里添加自定义的验证规则和消息
angular.module('testApp')
    .config(['$validationProvider', function($validationProvider) {
        // Setup `ip` validation
        var expression = {
            required: /^.*[^\s]+.*$/,
            ip: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            phone: /^[0-9]{11}$/,

        };

        var validMsg = {
            required: {
                error: '不能为空!!',
                success: 'It\'s Required'
            },
            ip: {
                error: '请填写正确的IP地址',
                success: 'It\'s ip'
            },
            phone: {
                error: '请填写正确的手机号码',
                success: '手机号码正确'
            }
        };

        $validationProvider.setExpression(expression) // set expression
            .setDefaultMsg(validMsg); // set valid message
    }]);


/*
 * rules 这里是系统默认的验证规则和消息
 */
(function() {
    angular.module('validation.rule', ['validation'])
        .config(['$validationProvider', function($validationProvider) {

                $validationProvider.setErrorHTML(function(msg) {
                    return "<label class=\"control-label has-error\">" + msg + "</label>";
                });

                $validationProvider.showSuccessMessage = false; // or true(default)
                $validationProvider.showErrorMessage = true; // or true(default)

                var expression = {
                    required: function(value) {
                        return /^.*[^\s]+.*$/.test(value);
                    },
                    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                    number: /^\d+$/,
                    money: /^[0-9]+(.[0-9]{0,2})?$/,
                    minlength: function(value, scope, element, attrs, param) {
                        return value.length >= param;
                    },
                    maxlength: function(value, scope, element, attrs, param) {
                        return value.length <= param;
                    },
                };

                var defaultMsg = {
                    required: {
                        error: '不能为空!!',
                        success: 'It\'s Required'
                    },
                    url: {
                        error: '必须是url，类似https://www.google.com',
                        success: 'It\'s Url'
                    },
                    email: {
                        error: '必须是email，类似CEO@test.com',
                        success: 'It\'s Email'
                    },
                    number: {
                        error: '必须是数字',
                        success: 'It\'s Number'
                    },
                    money: {
                        error: '小数点后保留两位小数',
                        success: 'It\'s Number'
                    },
                    minlength: {
                        error: '输入文字太少',
                        success: 'Long enough!'
                    },
                    maxlength: {
                        error: '输入文字太多',
                        success: 'Short enough!'
                    }
                };

                $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

            }
        ]);

}).call(this);
