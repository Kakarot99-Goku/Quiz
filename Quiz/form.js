window.addEventListener('blur', stopTimer);
                    function stopTimer() {
                        top.opener = self;
                        top.window.close();
                       }
           
