import Joi from 'joi';
import { ParameterizedContext } from 'koa';

import { ALLOW_HTTP_CODE } from '@/constant';
import { CustomError } from '@/model/customError.model';

const schema = Joi.object({
  id: Joi.number(),
  name: Joi.string().min(1).max(50),
  cover_pic: Joi.string().min(3).max(200),
  author: Joi.string().min(1).max(50),
  audio_url: Joi.string().min(3).max(200),
  status: [1, 2],
  priority: Joi.number(),
});

export const verifyProp = async (ctx: ParameterizedContext, next) => {
  try {
    const props = ctx.request.body;
    await schema.validateAsync(props, {
      abortEarly: false,
      allowUnknown: false,
      convert: false,
    });
    await next();
  } catch (error: any) {
    throw new CustomError(
      error.message,
      ALLOW_HTTP_CODE.paramsError,
      ALLOW_HTTP_CODE.paramsError
    );
  }
};
