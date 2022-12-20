const buildRequest = (query, variables = {}) => {
  return {
    method: "POST",
    body: JSON.stringify({
      query,
      variables
    })
  };
};
export { buildRequest as b };
