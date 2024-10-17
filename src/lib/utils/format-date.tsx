export function formatDateStrToLocal (
  dateStr: string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions,
) {
  const date = new Date(dateStr);
  let opt: Intl.DateTimeFormatOptions;
  let locl: string;

  if (locale) {
    locl = locale;
  } else {
    locl = 'en-US';
  }

  if (options) {
    opt = options;
  } else {
    opt = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
  }

  const formatter = new Intl.DateTimeFormat(locl, opt);
  return formatter.format(date);
};

export function formatDateToString (
  date: Date,
  options?: Intl.DateTimeFormatOptions,
) {
  let opt: Intl.DateTimeFormatOptions;

  if (options) {
    opt = options;
  } else {
    opt = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
  }

  const formatter = new Intl.DateTimeFormat('en-US', opt);
  return formatter.format(date);
};