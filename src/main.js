import { SpaceCalculator } from './backend';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#galaxy").submit(function(event) {
    event.preventDefault();
    $('.remaining-life').hide();
    $('.extra-life').hide();
    let userSex = $("#user-sex").val();
    let userAge = $("#user-age").val();

    const maleAvgLife = 76;
    const femaleAvgLife = 81;

    let newUser = new SpaceCalculator(userSex, userAge);

    $('#mercury-age').text(newUser.mercuryCalculator() + " ");
    $('#venus-age').text(newUser.venusCalculator() + " ");
    $('#mars-age').text(newUser.marsCalculator() + " ");
    $('#jupiter-age').text(newUser.jupiterCalculator() + " ");
    $('.planet-ages').show();

    // $('#mercury-remaining').text(newUser.mercuryLifeExpectancy() + " ");
    // $('#venus-remaining').text(newUser.venusLifeExpectancy() + " ");
    // $('#mars-remaining').text(newUser.marsLifeExpectancy() + " ");
    // $('#jupiter-remaining').text(newUser.jupiterLifeExpectancy() + " ");
    // $('.remaining-life').show();

    if (newUser.sex === "Male" && newUser.age < maleAvgLife) {
      $('#mercury-remaining').text(newUser.mercuryLifeExpectancy() + " ");
      $('#venus-remaining').text(newUser.venusLifeExpectancy() + " ");
      $('#mars-remaining').text(newUser.marsLifeExpectancy() + " ");
      $('#jupiter-remaining').text(newUser.jupiterLifeExpectancy() + " ");
      $('.remaining-life').show();
    } else if (newUser.sex === "Female" && newUser.age < maleAvgLife) {
      $('#mercury-remaining').text(newUser.mercuryLifeExpectancy() + " ");
      $('#venus-remaining').text(newUser.venusLifeExpectancy() + " ");
      $('#mars-remaining').text(newUser.marsLifeExpectancy() + " ");
      $('#jupiter-remaining').text(newUser.jupiterLifeExpectancy() + " ");
      $('.remaining-life').show();
    } else if (newUser.sex === "Male" && newUser.age > maleAvgLife) {
      $('#mercury-extra').text(newUser.mercuryLifeExpectancy() + " ");
      $('#venus-extra').text(newUser.venusLifeExpectancy() + " ");
      $('#mars-extra').text(newUser.marsLifeExpectancy() + " ");
      $('#jupiter-extra').text(newUser.jupiterLifeExpectancy() + " ");
      $('.extra-life').show();
    } else {
      $('#mercury-extra').text(newUser.mercuryLifeExpectancy() + " ");
      $('#venus-extra').text(newUser.venusLifeExpectancy() + " ");
      $('#mars-extra').text(newUser.marsLifeExpectancy() + " ");
      $('#jupiter-extra').text(newUser.jupiterLifeExpectancy() + " ");
      $('.extra-life').show();
    }
  });
});
