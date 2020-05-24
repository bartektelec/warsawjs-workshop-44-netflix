export class DefaultTheme {
    constructor() {
        this.$el = document.createElement('div');
    }

    createControls() {
        const $controls = document.createElement('div');
        $controls.classList.add('controls');
        this.$el.append($controls);
        return this;
    }

    createProgress() {
        const $progress = document.createElement('div');
        $progress.classList.add('progress');
        const $progressBar = document.createElement('div');
        $progressBar.classList.add('progress-bar', 'bg-success');
        $progressBar.setAttribute('role', 'progressbar');
        $progress.appendChild($progressBar);
        this.$el.append($progress);
        return this;
    }

    addButton(className, label, func) {
        const $button = document.createElement('button');
        $button.classList.add('btn', 'btn-primary', 'mr-2', className);
        $button.textContent = label;
        $button.addEventListener('click', func);
        this.$el.append($button);
        return this;
    }

    render($target) {
        $target.append(this.$el);
        return this.$el;
    }
}
