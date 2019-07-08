/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, text } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from 'storybook-inspecthtml';
import LinkTo from '@storybook/addon-links/react';
import CenterDecorator from '../.storybook/centerDecorator';
import 'rex-text';

import { IconList, SnsIconList } from '../src/IconList';

const Icon =
  process.env.NODE_ENV === 'production'
    ? require('../build/node_modules/rex-icons').default
    : require('../src/Icon').default;

const iconSizes = [
  {
    className: 'text-extra-large',
    text: {
      en: 'Extra large',
      jp: 'とても大きい',
    },
  },
  {
    className: 'text-large',
    text: {
      en: 'Large',
      jp: '大きい',
    },
  },
  {
    className: 'text-small',
    text: {
      en: 'Small',
      jp: '小さい',
    },
  },
  {
    className: 'text-extra-small',
    text: {
      en: 'Extra small',
      jp: 'とても小さい',
    },
  },
];

const langOptions = {
  English: 'en',
  Japanese: 'jp',
};

const stories = storiesOf('Icon', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(CenterDecorator);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);

// Stories
stories.add('list', () => {
  const list = IconList.map(({ name, filled, lined }) => {
    const category = name.charAt(0).toUpperCase();
    const kind = `Rakuten Icons/${category}`;

    return (
      <tr key={name}>
        <td className="text-extra-large">
          <Icon name={filled} />
        </td>
        <td>{filled}</td>
        <td className="text-extra-large">
          <Icon name={lined} />
        </td>
        <td>{lined}</td>
        <td>
          <LinkTo kind={kind} story={name}>
            See more
          </LinkTo>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>Filled</th>
          <th />
          <th>Lined</th>
          <th />
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
});

// Dynamic stories for logos
IconList.forEach(icon => {
  const category = icon.name.charAt(0).toUpperCase();
  const storiesSub = storiesOf(`Rakuten Icons/${category}`, module);
  storiesSub.addDecorator(withInspectHtml);
  storiesSub.addDecorator(withKnobs);

  storiesSub.add(icon.name, () => {
    let iconClassName = icon.original;

    if (icon.isFilled && icon.isLined) {
      const isFilled = boolean('Filled', true);
      iconClassName = icon.lined;

      if (isFilled) {
        iconClassName = icon.filled;
      }
    }
    if (icon.isFilled && !icon.isLined) {
      iconClassName = icon.filled;
    }
    if (!icon.isFilled && icon.isLined) {
      iconClassName = icon.lined;
    }

    const lang = radios('Example in ', langOptions, 'en');
    const classNameIcon = text('Dynamic classname', '');
    const list = iconSizes.map((size, key) => {
      const textSample = size.text[lang];

      return (
        <div className={size.className} key={key}>
          <Icon name={iconClassName} className={classNameIcon} />
          {textSample}
        </div>
      );
    });

    return <React.Fragment>{list}</React.Fragment>;
  });
});

// SNS icons
SnsIconList.forEach(icon => {
  const category = icon.name.charAt(0).toUpperCase();
  const storiesSns = storiesOf(`SNS Icons/${category}`, module);
  const iconName = icon.name.substring(2);
  storiesSns.addDecorator(withInspectHtml);
  storiesSns.addDecorator(CenterDecorator);
  storiesSns.addDecorator(checkA11y);
  storiesSns.addDecorator(withKnobs);

  if (!iconName.includes('-color')) {
    storiesSns.add(icon.name, () => {
      const colorClassName = `${iconName}-color`;
      const options = {
        color: `${colorClassName}`,
        base: iconName,
      };
      const classNameIcon = radios('Icon color', options, colorClassName);
      let iconClassName = icon.original;

      if (icon.isFilled && icon.isLined) {
        const isFilled = boolean('Filled', true);
        iconClassName = icon.lined;

        if (isFilled) {
          iconClassName = icon.filled;
        }
      }
      if (icon.isFilled && !icon.isLined) {
        iconClassName = icon.filled;
      }
      if (!icon.isFilled && icon.isLined) {
        iconClassName = icon.lined;
      }

      return (
        <div key={icon.filled} className="text-extra-large">
          <Icon name={iconClassName} className={classNameIcon} />
        </div>
      );
    });
  }
});
