import { createAction } from "redux-actions";

export const trigger = createAction("requestScreen->TRIGGER");
export const start = createAction("requestScreen->START");
export const success = createAction(
  "requestScreen->SUCCESS",
  ({ loading, requestList }) => ({ loading, requestList })
);
export const failure = createAction("requestScreen->FAILURE", ({ error }) => ({
  error
}));

/*Все действия 
1) Получение текучего списка заявок 

В самой форме
1)  Получение списка статусов 
2) Запрос на создание
3) запрос на редактирование 
4) 

*/
