import $ from 'jquery';

function heroJs() {
  /**
   * ! Step 1
   * TODO: clic miror box / message error / button unactive + message
   */

  // Mirror Clic on Radio Step 1
  $(document).on('click', '#excel, #word, #powerpoint, #plusieurs-outils', function () {
    $('.hero-button.is-step-1').removeClass('is-unactive');
    setTimeout(function () {
      $('.hero-button.is-step-1').click();
    }, 10);
  });
  // Loader on step 1
  $(document).on('click', '.hero-button.is-step-1', function () {
    $('.loader_component.is-step-1').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-1').css('display', 'none');
    }, 1500);
  });

  // Error message on step 1
  $(document).on('click', '.form-radio.is-step-1', function () {
    $('.hero_message-error.is-step-1').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-1').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-1').css('display', 'flex');
    }
  });

  /**
   * ! Step 2
   */
  // Mirror Clic on Radio Step 2
  $(document).on('click', '#debutant, #intermediaire, #confirme', function () {
    $('.hero-button.is-step-2').removeClass('is-unactive');
    setTimeout(function () {
      $('.hero-button.is-step-2').click();
    }, 10);
  });
  // Loader on step 2
  $(document).on('click', '.hero-button.is-step-2', function () {
    $('.loader_component.is-step-2').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-2').css('display', 'none');
    }, 1500);
  });

  // Error message on step 2
  $(document).on('click', '.form-radio.is-step-2', function () {
    $('.hero_message-error.is-step-2').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-2').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-2').css('display', 'flex');
    }
  });

  /**
   * ! Step 3
   *
   */
  // Mirror Clic on Radio Step 3
  $(document).on('click', '#e-learning, #face-a-face, #les-deux', function () {
    $('.hero-button.is-step-3').removeClass('is-unactive');
    setTimeout(function () {
      $('.hero-button.is-step-3').click();
    }, 10);
  });
  // Loader on step 3
  $(document).on('click', '.hero-button.is-step-3', function () {
    $('.loader_component.is-step-3').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-3').css('display', 'none');
    }, 1500);
  });

  // Error message on step 3
  $(document).on('click', '.form-radio.is-step-3', function () {
    $('.hero_message-error.is-step-3').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-3').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-3').css('display', 'flex');
    }
  });

  /**
   * ! Step 4
   */
  // Mirror Clic on Radio Step 4
  $(document).on(
    'click',
    '#plus-de-10-ans, #entre-5-et-10-ans, #entre-2-et-5-ans, #moins-de-2-ans',
    function () {
      $('.hero-button.is-step-4').removeClass('is-unactive');
      setTimeout(function () {
        $('.hero-button.is-step-4').click();
      }, 10);
    }
  );
  // Loader on step 4
  $(document).on('click', '.hero-button.is-step-4', function () {
    $('.loader_component.is-step-4').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-4').css('display', 'none');
    }, 1500);
  });

  // Error message on step 4
  $(document).on('click', '.form-radio.is-step-4', function () {
    $('.hero_message-error.is-step-4').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-4').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-4').css('display', 'flex');
    }
  });

  /**
   * ! Step 5
   */

  // Mirror Clic on Radio Step 5
  $(document).on('click', '#oui, #non', function () {
    $('.hero-button.is-step-5').removeClass('is-unactive');
    setTimeout(function () {
      $('.hero-button.is-step-5').click();
    }, 10);
  });
  // Loader on step 5
  $(document).on('click', '.hero-button.is-step-5', function () {
    $('.loader_component.is-step-5').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-5').css('display', 'none');
    }, 1500);
  });

  // Error message on step 5
  $(document).on('click', '.form-radio.is-step-5', function () {
    $('.hero_message-error.is-step-5').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-5').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-5').css('display', 'flex');
    }
  });

  /**
   * ! Step 6
   */

  // Mirror Clic on Radio Step 6
  $(document).on(
    'click',
    '#ameliorer-des-connaissances, #reconversion-professionnelle, #evolution-des-carrieres, #je-ne-suis-pas-interesse-s6',
    function () {
      $('.hero-button.is-step-6').removeClass('is-unactive');
      setTimeout(function () {
        $('.hero-button.is-step-6').click();
      }, 10);
    }
  );
  // Loader on step 6
  $(document).on('click', '.hero-button.is-step-6', function () {
    $('.loader_component.is-step-6').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-6').css('display', 'none');
    }, 1500);
  });

  // Error message on step 6
  $(document).on('click', '.form-radio.is-step-6', function () {
    $('.hero_message-error.is-step-6').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-6').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-6').css('display', 'flex');
    }
  });

  /**
   * ! Step 7
   */

  // Mirror Clic on Radio Step 7
  $(document).on(
    'click',
    '#des-que-possible, #dans-moins-3-mois, #dans-plus-3-mois, #je-ne-suis-pas-interesse-s7',
    function () {
      $('.hero-button.is-step-7').removeClass('is-unactive');
      setTimeout(function () {
        $('.hero-button.is-step-7').click();
      }, 10);
    }
  );
  // Loader on step 7
  $(document).on('click', '.hero-button.is-step-7', function () {
    $('.loader_component.is-step-7').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-7').css('display', 'none');
    }, 1500);
  });

  // Error message on step 7
  $(document).on('click', '.form-radio.is-step-7', function () {
    $('.hero_message-error.is-step-7').css('display', 'none');
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-7').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-7').css('display', 'flex');
    }
  });

  /**
   * ! Step 8
   */

  // Check on input Step 8
  $(document).on('input', '#email', function () {
    // Obtention de la valeur de l'input
    const emailValue = $(this).val();

    // Vérification que la valeur est une chaîne et qu'elle n'est pas vide
    if (typeof emailValue === 'string' && emailValue !== '') {
      // Utilisez un regex simple pour vérifier le format de l'e-mail
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (emailRegex.test(emailValue)) {
        $('.hero-button.is-step-8').removeClass('is-unactive'),
          $('.hero_message-error.is-step-8').css('display', 'none');
      } else {
        $('.hero-button.is-step-8').addClass('is-unactive'),
          $('.hero_message-error.is-step-8').css('display', 'flex');
      }
    } else {
      $('.hero-button.is-step-8').addClass('is-unactive'),
        $('.hero_message-error.is-step-8').css('display', 'flex');
    }
  });

  // Loader on step 8
  $(document).on('click', '.hero-button.is-step-8', function () {
    $('.loader_component.is-step-8').css('display', 'flex');

    setTimeout(function () {
      $('.hero_right-arrow').click();
    }, 500);
    setTimeout(function () {
      $('.loader_component.is-step-8').css('display', 'none');
    }, 1500);
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-step-8').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-8').css('display', 'flex');
    }
  });

  /**
   * ! Step 9
   */
  // Check on input Step 9
  $(document).on('input', '#prenom, #nom, #telephone, #cgv', function () {
    const prenomValue = $('#prenom').val();
    const nomValue = $('#nom').val();
    const telephoneValue = $('#telephone').val();
    const cgvValue = $('#cgv').prop('checked'); // Pour une checkbox

    if (prenomValue && nomValue && telephoneValue && cgvValue) {
      $('.hero-button.is-submit').removeClass('is-unactive');
      $('.hero_message-error.is-step-9').css('display', 'none');
    } else {
      $('.hero-button.is-submit').addClass('is-unactive');
    }
  });

  $(document).on('click', '.hero_button-wrapper', function () {
    if ($(this).find('.hero-button.is-submit').hasClass('is-unactive')) {
      $('.hero_message-error.is-step-9').css('display', 'flex');
    }
  });
  /**
   * ! Step Gobal
   */
  // Clic previous - Global
  $(document).ready(function () {
    $('.hero_previous-wrapper').on('click', function () {
      $('.hero_left-arrow').click();
    });
  });

  // mirror clic when open
  $(document).ready(function () {
    $('.open-back-button').on('click', function () {
      $('.hero_left-arrow').trigger('click');
    });
  });

  // mirror clic when open
  $(document).ready(function () {
    $('.form-radio.is-step-1').on('click', function () {
      $('.open-form').trigger('click');
    });
  });
}

export { heroJs };
