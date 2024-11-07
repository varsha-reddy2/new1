export default function json2html(data) {
  """Converts a JavaScript array of objects to an HTML table string.

  Args:
    data: A list of dictionaries, where each dictionary represents a row in the table.

  Returns:
    A string containing the HTML table representation of the data.
  """

  // Get all unique keys from the data
  const keys = new Set(key for item in data for key in item.keys());

  // Construct the table header row
  const tableHeader = `<tr>${[...keys].map(key => `<th>${key}</th>`).join('')}</tr>`;

  // Construct the table body rows
  const tableBody = data.map(
      item =>
          `<tr>${[...keys].map(key => `<td>${item[key] || ''}</td>`).join('')}</tr>`
  ).join('');

  // Return the complete HTML table string with data-user attribute
  return (
      `<table>\n` +
      `  <thead>\n` +
      `    ${tableHeader}\n` +
      `  </thead>\n` +
      `  <tbody>\n` +
      `    ${tableBody}\n` +
      `  </tbody>\n` +
      `</table>`
  );
}