interface IStatusMessages {
  [key: number]: string;
}

const statusMessages: IStatusMessages = {
  408: "Tempo de processamento excedido! Tente novamente mais tarde",
  500: "Houve algum erro com a requisição! Tente novamente mais tarde"
};

export default function getMessageByApiStatus(status: number): string {
  return statusMessages[status];
}
