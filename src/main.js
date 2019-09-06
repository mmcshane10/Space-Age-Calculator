import { SpaceCalculator } from './backend';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#galaxy").submit(function(event) {
    event.preventDefault();
    let userSex = $("#user-sex").val();
    let userAge = $("#user-age").val();

    let newUser = new SpaceCalculator(userSex, userAge);
    console.log(newUser);
  });
});
