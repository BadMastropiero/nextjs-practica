import React from "react";

type Props = {
  id: number;
  title: string;
};

export default function Lista({ id, title }: Props) {
  return (
    <li key={id}>
      <h4>{title}</h4>
      <br />
      <p>Este es un elemento de la lista</p>
    </li>
  );
}
