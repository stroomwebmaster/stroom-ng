import { Component } from 'preact';

import style from './style';

export default class Venue extends Component {
    componentDidMount() {
        // Replace '\' in this string. It is left in from the CMS when using 'shift + enter' to create newline.
        this.props.content.description = this.props.content?.description.replaceAll(String.fromCharCode(92), '');
    }

    render() {
        return (
            <article class="bg-coal w-hd-80 xl:ml-auto relative">
                <img src="./assets/dekas.jpg" class={`w-full ${style.locationPhoto}`} />
                <div class="container mx-auto relative -top-12">
                    <div class="col-span-4 md:col-span-8 lg:col-span-12 grid md:grid-cols-8 lg:grid-cols-12 bg-orange lg:mt--40 border-b-8 border-turquoise py-8 md:py-12">
                        <p class="text-coal text-sm md:text-lg lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed md:mb-8 font-HelveticaNeueLTPro-Ex pl-4 whitespace-pre-line">
                            {this.props.content?.description}
                        </p>
                    </div>
                </div>
            </article>
        );
    }
}
