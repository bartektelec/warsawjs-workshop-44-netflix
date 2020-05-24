import { createDOMElementFromString } from '../utils/create-dom-element-from-string.js';
import { VideoFactory } from './video-factory.js';

export class VideoPaidFactory extends VideoFactory {
    static template({ thumb, title }) {
        return `<div class="card mb-3">
                        <img
                            src="${thumb}"
                            class="card-img-top"
                            alt=""
                        />
                    [$$$]<div class="card-body">
                        <h5 class="card-title">
                                ${title}
                        </h5>
                    </div>
                </div>`;
    }
}
