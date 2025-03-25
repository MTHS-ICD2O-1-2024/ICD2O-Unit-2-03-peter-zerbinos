// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Combine street number and name together.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  // output
  document.getElementById("user-address").innerHTML =
    "<p>Your address is: " + streetNumber + ", " + streetName + ". </p>"
}
