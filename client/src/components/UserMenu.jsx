import React from 'react';
import { useEffect } from 'react';

const UserMenu = () => {
    useEffect(() => {
        // Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle

        function fun () {
            var html = document.getElementsByTagName('html');
            var radios = document.getElementsByName('themes'); 
            for (let i = 0; i < radios.length; i++) {
                radios[i].addEventListener('change', function() {
                  html[0].classList.remove(html[0].classList.item(0));
                    html[0].classList.add(this.id);
                });
            }
        }

        fun()
    }, [])
    return (
        <div class="menu">
            <div class="menu-header">
                <h2 class="menu-header-title">Theme</h2>
                <div class="theme-switcher">
                    <input type="radio" id="light-theme" name="themes" checked />
                    <label for="light-theme">
                        <span>
                            <i data-feather="sun"></i>Light
                        </span>
                    </label>
                    <input type="radio" id="dark-theme" name="themes" />
                    <label for="dark-theme">
                        <span>
                            <i data-feather="moon"></i>Dark
                        </span>
                    </label>
                    <input type="radio" id="black-theme" name="themes" />
                    <label for="black-theme">
                        <span>
                            <i data-feather="star"></i>Black
                        </span>
                    </label>
                    <span class="slider"></span>
                </div>
            </div>

            <div class="menu-body">
                <a href="#"><i data-feather="user"></i>Account Settings</a>
                <a href="#"><i data-feather="message-square"></i>Give Feedback</a>
                <a href="#"><i data-feather="info"></i>About</a>
                <a href="#"><i data-feather="life-buoy"></i>Support</a>
            </div>
        </div>
    );
}

export default UserMenu;
