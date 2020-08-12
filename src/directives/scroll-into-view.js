

const scrollObserver = new IntersectionObserver(

    (entries, scrollObserver) => {
        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.remove('out-of-view');
                entry.target.classList.add('enter-view');
                //scrollObserver.unobserve(entry.target);
            
            } else {

                entry.target.classList.remove('enter-view');
                entry.target.classList.add('out-of-view');
                //scrollObserver.unobserve(entry.target);

            }

        })
        
    }
);

export default {

    bind (el) {
        el.classList.add('out-of-view');
        scrollObserver.observe(el);
    }
}