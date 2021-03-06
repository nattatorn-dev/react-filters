import { configure, addDecorator } from '@kadira/storybook';
import './base.scss';
import centered from '@kadira/react-storybook-decorator-centered';

addDecorator(centered);

function loadStories () {
  require('../stories/Switch.story');
  require('../stories/Radio.story');
  require('../stories/Slider.range.story.js');
  require('../stories/CheckBox.story');
  require('../stories/AutoComplete.story');
  require('../stories/Count.story');
  require('../stories/InputRange.story');
  require('../stories/Group.story');
  require('../stories/Slider.value.story.js');
}

configure(loadStories, module);
