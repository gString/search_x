import { useEffect } from "react";

const useFocusOutsideHandler = (ref, callback) => {

        useEffect(() => {
            function handler(event) {
                if ( ref.current && !ref.current.contains (event.target) ) {
                    callback();
                }
            }
    
            document.addEventListener ("mousedown", handler);
            document.addEventListener ('touchstart', handler);
            document.addEventListener ('focusin', handler);
            // cleanup
            return () => {
                document.removeEventListener ("mousedown", handler);
                document.removeEventListener ("touchstart", handler);
                document.removeEventListener ("focusin", handler);
            };
        }, [ref, callback]);
};

export {useFocusOutsideHandler};