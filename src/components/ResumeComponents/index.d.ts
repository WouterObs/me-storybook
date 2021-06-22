//
//#region Resume Prop Interfaces
/**
 *?Resume properties interface.
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
 *?Main resume properties interface.
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

export interface Address {
  /**
   *?Prop
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
}

export interface Social {
  name: string;
  url: string;
  className: string;
}

export interface Portfolio {
  projects: Project[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

export interface Resume {
  skillmessage: string;
  education: Education[];
  work: Work[];
  skills: Skill[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Work {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface Testimonials {
  testimonials: Testimonial[];
}

export interface Testimonial {
  text: string;
  user: string;
}
//#endregion Resume Prop Interfaces
//
