export type Todo = {  
    todoTxt: string,
    isCheck: boolean
  };
  
  export type AddTodoFunc = (text: string) => void;
  export type ToggleTodoFunc = (todo: Todo) => void;
  export type DeleteTodoFunc = (todo: Todo) => void;
  //타입스크립트로 구현하려면 자료형type을 선언해야한다
  //컴포넌트들에 자료형을 공유하기 위해 types 파일을 만듦