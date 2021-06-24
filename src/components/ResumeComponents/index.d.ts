//
//#region Resume Prop Interfaces

/**
 *?ResumeData properties interface.
 *
 * @export
 * @interface ResumeData
 */
export interface ResumeData {
  /**
   *?Main Resume data.
   *
   * @type {Main}
   * @memberof ResumeData
   */
  main: Main;
  /**
   *?Resume data.
   *
   * @type {Resume}
   * @memberof ResumeData
   */
  resume: Resume;
  /**
   *?Portfolio data.
   *
   * @type {Portfolio}
   * @memberof ResumeData
   */
  portfolio: Portfolio;
  /**
   *?Testimonials data.
   *
   * @type {Testimonials}
   * @memberof ResumeData
   */
  testimonials: Testimonials;
}

/**
 *?Main property interface.
 *
 * @export
 * @interface Main
 */
export interface Main {
  /**
   *?Prop name
   *
   * @type {string}
   * @memberof Main
   */
  name: string;
  /**
   *?Prop occupation
   *
   * @type {string}
   * @memberof Main
   */
  occupation: string;
  /**
   *?Prop description
   *
   * @type {string}
   * @memberof Main
   */
  description: string;
  /**
   *?Prop image
   *
   * @type {string}
   * @memberof Main
   */
  image: string;
  /**
   *?Prop bio
   *
   * @type {string}
   * @memberof Main
   */
  bio: string;
  /**
   *?Prop contactmessage
   *
   * @type {string}
   * @memberof Main
   */
  contactmessage: string;
  /**
   *?Prop email
   *
   * @type {string}
   * @memberof Main
   */
  email: string;
  /**
   *?Prop phone
   *
   * @type {string}
   * @memberof Main
   */
  phone: string;
  /**
   *?Prop address
   *
   * @type {Address}
   * @memberof Main
   */
  address: Address;
  /**
   *?Prop website
   *
   * @type {string}
   * @memberof Main
   */
  website?: string;
  /**
   *?Prop resumedownload
   *
   * @type {string}
   * @memberof Main
   */
  resumedownload?: string;
  /**
   *?Prop social
   *
   * @type {Social[]}
   * @memberof Main
   */
  social?: Social[];
}

/**
 * Type Address
 */
export type Address = {
  /**
   *?Prop street
   *
   * @type {string}
   * @memberof Address
   */
  street: string;
  /**
   *?Prop city
   *
   * @type {string}
   * @memberof Address
   */
  city: string;
  /**
   *?Prop state
   *
   * @type {string}
   * @memberof Address
   */
  state: string;
  /**
   *?Prop zip
   *
   * @type {string}
   * @memberof Address
   */
  zip: string;
};

/**
 *?Social property interface.
 *
 * @export
 * @interface Social
 */
export interface Social {
  /**
   *?Prop name
   *
   * @type {string}
   * @memberof Social
   */
  name: string;
  /**
   *?Prop URL
   *
   * @type {string}
   * @memberof Social
   */
  url: string;
  /**
   *?Prop className
   *
   * @type {string}
   * @memberof Social
   */
  className: string;
}

/**
 *?Portfolio property interface.
 *
 * @export
 * @interface Portfolio
 */
export interface Portfolio {
  /**
   *?Prop projects
   *
   * @type {Project[]}
   * @memberof Portfolio
   */
  projects: Project[];
}

/**
 *?Project property interface.
 *
 * @export
 * @interface Project
 */
export interface Project {
  /**
   *?Prop title
   *
   * @type {string}
   * @memberof Project
   */
  title: string;
  /**
   *?Prop category
   *
   * @type {string}
   * @memberof Project
   */
  category: string;
  /**
   *?Prop image
   *
   * @type {string}
   * @memberof Project
   */
  image: string;
  /**
   *?Prop url
   *
   * @type {string}
   * @memberof Project
   */
  url: string;
}

/**
 *?Resume property interface.
 *
 * @export
 * @interface Resume
 */
export interface Resume {
  /**
   *?Prop skillmessage
   *
   * @type {string}
   * @memberof Resume
   */
  skillmessage: string;
  /**
   *?Prop education
   *
   * @type {Education[]}
   * @memberof Resume
   */
  education: Education[];
  /**
   *?Prop work
   *
   * @type {Work[]}
   * @memberof Resume
   */
  work: Work[];
  /**
   *?Prop skills
   *
   * @type {Skill[]}
   * @memberof Resume
   */
  skills: Skill[];
}

/**
 * Type Education
 */
export type Education = {
  /**
   *?Prop school
   *
   * @type {string}
   */
  school: string;
  /**
   *?Prop degree
   *
   * @type {string}
   */
  degree: string;
  /**
   *?Prop graduated
   *
   * @type {string}
   */
  graduated: string;
  /**
   *?Prop description
   *
   * @type {string}
   */
  description: string;
};

/**
 * Type Skill
 */
export type Skill = {
  /**
   *?Prop name
   *
   * @type {string}
   */
  name: string;
  /**
   *?Prop level
   *
   * @type {string}
   */
  level: string;
};

/**
 * Type Work
 */
export type Work = {
  /**
   *?Prop company
   *
   * @type {string}
   */
  company: string;
  /**
   *?Prop title
   *
   * @type {string}
   */
  title: string;
  /**
   *?Prop years
   *
   * @type {string}
   */
  years: string;
  /**
   *?Prop description
   *
   * @type {string}
   */
  description: string;
};

/**
 *?Testimonials property interface.
 *
 * @export
 * @interface Testimonials
 */
export interface Testimonials {
  /**
   *?Prop Testimonials
   *
   * @type {Testimonial[]}
   * @memberof Testimonials
   */
  testimonials: Testimonial[];
}

/**
 * Type Testimonial
 */
export type Testimonial = {
  /**
   *?Prop text
   *
   * @type {string}
   */
  text: string;
  /**
   *?Prop user
   *
   * @type {string}
   */
  user: string;
};

//#endregion Resume Prop Interfaces
//
