// json2html.js
export default function json2html(data) {
  // Create the opening table tag with the custom data attribute
  let html = '<table data-user="varshareddyasani@gmail.com">';

  // Create the table header based on the keys of the first object
  html += '<thead><tr>';
  // Get the keys (columns) dynamically from the first object in the array
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';

  // Create the table body with the rows
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] || ''}</td>`;  // Handle undefined values
    });
    html += '</tr>';
  });
  html += '</tbody>';

  // Close the table tag
  html += '</table>';

  // Return the generated HTML string
  return html;
}
