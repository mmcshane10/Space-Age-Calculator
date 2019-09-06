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

    $('#mercury-age').text(newUser.mercuryCalculator() + " ");
    $('#venus-age').text(newUser.venusCalculator() + " ");
    $('#mars-age').text(newUser.marsCalculator() + " ");
    $('#jupiter-age').text(newUser.jupiterCalculator() + " ");
    $('.planet-ages').show();

    $('#mercury-remaining').text(newUser.mercuryLifeExpectancy() + " ");
    $('#venus-remaining').text(newUser.venusLifeExpectancy() + " ");
    $('#mars-remaining').text(newUser.marsLifeExpectancy() + " ");
    $('#jupiter-remaining').text(newUser.mercuryLifeExpectancy() + " ");
    $('.remaining-life').show();

  });
});
