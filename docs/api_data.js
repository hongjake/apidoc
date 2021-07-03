define({ "api": [
  {
    "type": "Post",
    "url": "/api/sms/send",
    "title": "发送短信",
    "name": "send",
    "group": "SendMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "SmsModel",
            "optional": false,
            "field": "smsModel",
            "description": "<p>短信模型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "短信模型",
          "content": "\n{\n    \"mobile\": \"\",\t        // String 必须字段, 手机号；支持批量手机号码，以英文字符‘,’分割，最多一次一千个号码\n    \"content\": \"\",\t        // String 必须字段, 短信内容,固定模板\n    \"sign\": \"\",\t            // String 选填字段, 短信签名，当字段为空时，自动加【万科物业】，签名应该带有【】，否则在运营商那边不会通过\n    \"sendTime\": \"\",\t        // String 选填字段, 定时发送，时间格式为yyyyMMddHHmm\n    \"callbackUrl\": \"\",\t    // String 选填字段，短信后续状态会对该url进行回调上报，callback_url?msg_id=xxxx&status=xxxx&status_desc=xxx&mobile=xxxx, 请求方法为GET，msg_id 短信批次id，status 运营商返回的状态，status_desc 状态说明内容经过URLEncode编码(UTF-8)，mobile 手机号码\n    \"pushCallbackUrl\": \"\",  // String 选填字段，短信上行回复内容会对该url进行回调上报，push_callback_url 请求方法为POST，请求内容为标准的json，msg_id 短信批次id，mobile 手机号码，content 上行回复内容\n    \"templateId\": \"\",\t    // String 选填字段，如果填入模板id，会进行相应模板id的校验，请先到API集市中提交模板审核\n    \"smsType\": \"\"    \t    // String 选填字段，notify 当填入该类型，会进入通知短信队列中，保证短信达到，适用于瞬时大批量发送\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "msgId",
            "description": "<p>短信批次码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"msg\": \"成功\",\n    \"data\": \"returnObject\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "SendMessage",
    "error": {
      "examples": [
        {
          "title": "error",
          "content": "HTTP/1.1 500 FAIL\n{\n    \"code\": 500,\n    \"msg\": \"失败\",\n    \"data\": \"returnObject\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
