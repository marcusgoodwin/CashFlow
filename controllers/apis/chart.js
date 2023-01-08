const router = require("express").Router();
import google from 'google-charts';

function drawChart() {

    google.charts.load('current', {'packages':['corechart']});


  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  // The select handler. Call the chart's getSelection() method
  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getValue(selectedItem.row, selectedItem.column);
      alert('The user selected ' + value);
    }
  }

  // Listen for the 'select' event, and call my function selectHandler() when
  // the user selects something on the chart.
  google.visualization.events.addListener(chart, 'select', selectHandler);

// Get a reference to the form element
var form = document.getElementById('my-form');

// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the data from the form
  var data = new FormData(form);

  // Use the data to update the chart
  updateChart(data);
});

function updateChart(data) {
        // Get the data table for the chart
        var dataTable = chart.getDataTable();
      
        // Update the data in the table using the data from the form
        dataTable.setValue(0, 0, data.get('task1'));
        dataTable.setValue(0, 1, data.get('hours1'));
        dataTable.setValue(1, 0, data.get('task2'));
        dataTable.setValue(1, 1, data.get('hours2'));
      
        // Redraw the chart
        chart.draw(dataTable);
      }
      
}


  module.exports = router;

