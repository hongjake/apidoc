
/**
 * @api {Post} /api/sms/send 发送短信
 * @apiName send
 * @apiGroup SendMessage
 *
 * @apiUse SmsModel
 *
 * @apiParam {SmsModel} smsModel 短信模型
 *
 * @apiSuccess {Long} msgId 短信批次码
 *
 * @apiUse SuccessResponse
 * @apiUse ErrorResponse
 *
 */


/**
 * @apiDefine SmsModel
 *
 * @apiParamExample {json} 短信模型
 *
 * {
 *     "mobile": "",	        // String 必须字段, 手机号；支持批量手机号码，以英文字符‘,’分割，最多一次一千个号码
 *     "content": "",	        // String 必须字段, 短信内容,固定模板
 *     "sign": "",	            // String 选填字段, 短信签名，当字段为空时，自动加【万科物业】，签名应该带有【】，否则在运营商那边不会通过
 *     "sendTime": "",	        // String 选填字段, 定时发送，时间格式为yyyyMMddHHmm
 *     "callbackUrl": "",	    // String 选填字段，短信后续状态会对该url进行回调上报，callback_url?msg_id=xxxx&status=xxxx&status_desc=xxx&mobile=xxxx, 请求方法为GET，msg_id 短信批次id，status 运营商返回的状态，status_desc 状态说明内容经过URLEncode编码(UTF-8)，mobile 手机号码
 *     "pushCallbackUrl": "",  // String 选填字段，短信上行回复内容会对该url进行回调上报，push_callback_url 请求方法为POST，请求内容为标准的json，msg_id 短信批次id，mobile 手机号码，content 上行回复内容
 *     "templateId": "",	    // String 选填字段，如果填入模板id，会进行相应模板id的校验，请先到API集市中提交模板审核
 *     "smsType": ""    	    // String 选填字段，notify 当填入该类型，会进入通知短信队列中，保证短信达到，适用于瞬时大批量发送
 * }
 *
 */

/**
 * @apiDefine SuccessResponse
 *
 * @apiSuccessExample {json} success
 * HTTP/1.1 200 OK
 * {
 *     "code": 200,
 *     "msg": "成功",
 *     "data": "returnObject"
 * }
 */

/**
 * @apiDefine ErrorResponse
 *
 * @apiErrorExample {json} error
 * HTTP/1.1 500 FAIL
 * {
 *     "code": 500,
 *     "msg": "失败",
 *     "data": "returnObject"
 * }
 */



