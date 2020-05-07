/*
 * @Description: 
 * @Version: 
 * @Author: Henry
 * @Date: 2020-05-07 10:29:24
 * @LastEditors: Henry
 * @LastEditTime: 2020-05-07 11:32:39
 */
export const courses = [
  {
    id: 0,
    name: 'React Fundamentals',
    grade: 'B',
    announcements: [
      {
        id: 0,
        title: 'No class tomorrow',
        body: 'There is no class tomorrow, please do not show up'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'Build a router',
        body: 'It will be easy, seriously, like 2 hours, 100 lines of code, no biggie',
        grade: 'N/A'
      }
    ]

  },

  {
    id: 1,
    name: 'Reusable React Components',
    grade: 'A-',
    announcements: [
      {
        id: 0,
        title: 'Final exam next wednesday',
        body: 'You had better prepare'
      }
    ],
    assignments: [
      {
        id: 0,
        title: 'PropTypes',
        body: "They aren't for you.",
        grade: '80%'
      },
      {
        id: 1,
        title: 'Iterating and Cloning Children',
        body: 'You can totally do it.',
        grade: '95%'
      }
    ]
  }
]
