import React from "react";

const profile = ({ name }:{name:string}) => {
  const data = require("../../data/user.json");

  return (
    <>
      <div>{name}</div>
      <div>{data.name}</div>
    </>
  );
};

export async function getServerSideProps() {
  const { name } = await import("../../data/user.json");

  return {
    props: {
      name: name,
    },
  };
}

export default profile;
