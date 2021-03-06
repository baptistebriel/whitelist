import config from 'config'
import classes from 'dom-classes'
import Default from './page'

class Contact extends Default {
    
    constructor(opt) {
        
        super(opt)

        this.hasCanvas = true
        this.slug = 'contact'
    }
    
    animateIn(req, done) {
        
        classes.add(config.$body, `is-${this.slug}`)
        classes.remove(config.$body, 'is-loading')
        
        const tl = new TimelineMax({ paused: true, onComplete: done })
        tl.from(this.ui.letter, 2.5, { scale: 1.6, x: '-100%', ease: Expo.easeInOut })
        tl.staggerFrom(this.split.chars, 1.2, { y: '110%', ease: Power4.easeOut }, .01, .3)
        tl.staggerFrom(this.ui.stagger, 2.5, { x: '15%', autoAlpha: 0, ease: Expo.easeOut }, .08, 1)
        tl.staggerFrom(this.ui.social, 1.1, { autoAlpha: 0, y: '60%', clearProps: 'all' }, .09, 1.2)
        tl.restart()
        
        classes.add(this.page, 'animateIn')
        classes.add(this.ui.content, 'animateIn')
    }

    animateOut(req, done) {
        
        const phone = config.isMobile

        classes.add(config.$body, 'is-loading')
        classes.remove(config.$body, `is-${this.slug}`)
        
        const tl = new TimelineMax({ paused: true, onComplete: done })
        tl.to(this.ui.letter, 2.5, { scale: 1.6, x: '-100%', ease: Expo.easeInOut })
        tl.staggerTo(this.split.chars, 1.2, { y: phone ? '-150%' :'-110%', ease: Power4.easeOut }, .01, .3)
        tl.staggerTo(this.ui.stagger, 2.5, { autoAlpha: 0, ease: Expo.easeOut }, .02, 0)
        tl.staggerTo(this.ui.social, 1.1, { autoAlpha: 0, y: '60%' }, -.09, 0)
        tl.to(this.page, 1, { autoAlpha: 0 })
        tl.restart()
    }
}

module.exports = Contact