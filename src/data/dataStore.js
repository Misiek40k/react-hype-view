export const settings = {
  logo: {
    txt: 'HYP',
    icon: 'bars',
  },
  header: {
    title: 'Zadanie rekrutacyjne',
  },
  content: {
    title: 'People',
    buttons: {
      size: {
        large: 'large',
        medium: 'medium',
        small: 'small',
      },
      line: {
        true: 'line',
        outer: 'outerLine',
        inner: 'innerLine',
      },
      variant: {
        success: 'success',
        danger: 'danger',
      },
      icon: {
        plus: 'plus',
        minus: 'minus',
        cancel: 'ban',
      },
    },
    condition: {
      txt: {
        outer: 'And',
        inner: 'Or',
      },
      variant: {
        large: 'large',
        medium: 'medium',
        small: 'small',
      },
    },
    popup: {
      item: 'Add Item',
      option: 'Add Option',
    },
    select: {
      label: 'Chose item size: ',
      txt: {
        medium: 'Medium',
        large: 'Large',
      },
      variant: {
        medium: 'medium',
        large: 'large',
      },
    },
  },
};

export const initialState = [
  {
    id: 1,
    variant: 'medium',
    title: 'Age 40+',
  },
  {
    id: 2,
    variant: 'large',
    title: 'Ethnicity',
    options: [
      {
        id: 1,
        name: 'Black',
      },
      {
        id: 2,
        name: 'Hispanic',
      },
    ],
  },
  {
    id: 3,
    variant: 'medium',
    title: 'Income yearly 45k USD+',
  },
];
