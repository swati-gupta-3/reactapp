export default (async function showResults(values) {
  window.alert(`Submitted Data:\n\n${JSON.stringify(values,null,2)}`);
});
