/// <reference types='codeceptjs' />
type steps_file = typeof import('./custom.js');
type apiHelper = import('./apiHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, apiHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<apiHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
