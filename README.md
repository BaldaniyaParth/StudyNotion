# StudyNotion 
StudyNotion is an innovative EdTech platform that enables users to create, consume, and rate educational content. Built with the MERN stack, StudyNotion offers features like user authentication, course management, payment integration, and more. Instructors can upload courses and track progress through visually appealing pie charts, while students can interact with course materials and track their learning progress. Check out the live site here :- [```live```]()


### StudyNotion aims to provide:
* A seamless and interactive learning experience for students, making education more accessible and engaging.
* A platform for instructors to showcase their expertise and connect with learners across the globe.


## Technologies Used
- Frontend: ReactJS, TailwindCSS
- Backend: Express, NodeJS, MongoDB
- Payment Processing: Razorpay
- Frontend Hosting: Vercel
- Backend Hosting: Render
- Course Data Storage: Cloudinary
- Profile Picture Generation: Dicebear API


## Front-end
The front end of StudyNotion has all the necessary pages that an ed-tech platform should have. Some of these pages are:

### For Students:
1. **Homepage:**
    - Brief introduction to the platform
    - Links to the course list and user details

2. **Course List:**
    - List of all available courses
    - Course descriptions
    - Course ratings and reviews
    - Option to add courses to wishlist or cart

3. **Wishlist:**
    - Display of courses added to the student's wishlist
    - Option to remove courses from the wishlist
    - Option to move courses from wishlist to cart

4. **Cart Checkout:**
    - Overview of courses in the cart
    - Payment options
    - Confirmation of course purchase

5. **Course Content:**
    - Detailed content for a particular course
    - Videos and other related materials
    - Progress Tracking for the course

6. **User Details:**
    - Student's account details including name, email, etc.
    - Overview of enrolled courses
    - Links to edit account details

7. **User Edit Details:**
    - Form to edit account details like name, email, password, etc

8. **Progress Tracking:**
    - Track learning progress of course for students.


### For Instructors:
1. **Dashboard:**
    - Overview of the instructor's courses
    - Ratings and feedback for each course

2. **Insights:**
    - Detailed insights into the instructor's courses
    - Number of views, clicks, and other relevant metrics

3. **Course Management Pages:**
    - Create, update, and delete courses
    - Manage course content and pricing

4. **View and Edit Profile Details:**
    - View and edit account details.


## Back-end
The back end of StudyNotion provides a range of features and functionalities, including:

1. **User Authentication and Authorization:**
    - Students and instructors can sign up and log in using their email addresses and password
    - Supports OTP (One-Time Password) verification and forgot password functionality for added security

2. **Course Management:**
    - Instructors can create, read, update, and delete courses
    - Manage course content and media
    - Students can view, rate and review courses

3. **Payment Integration:**
    - Students can purchase and enroll in courses by completing the checkout flow
    - Razorpay integration for payment handling

4. **Cloud-based Media Management:**
    - StudyNotion uses Cloudinary to store and manage all media content, including images, videos, and documents

5. **Markdown Formatting:**
    - Course content in document format is stored in Markdown format
    - Easier display and rendering on the front end


## Additional Features
- **Instructor Dashboard**: Instructors can log in and access their personalized dashboard to upload and manage their courses. They can monitor the progress of enrolled students through informative pie charts created with Chart.js.

- **Student Dashboard**: Students can access their dashboard after registering for courses. They can view their enrolled courses, track their learning progress, and interact with the course material.

- **Profile Picture Generation**: Users' profile pictures are automatically generated using Dicebear's API, creating unique and personalized avatars for each user.


## Installation and Setup
This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/BaldaniyaParth/StudyNotion.git
    ```

2. Install the required packages.
    ```sh
    npm install
    ```

3. Start the development server.
    ```sh
    npm run dev
    ```

4. Open the project in your browser at [http://localhost:3000](http://localhost:3000) to view your project.

## Contributing
Contributions are welcome! If you have any suggestions or find any issues, please feel free to open an issue or a pull request.

## Acknowledgments
- Thanks to Chart.js, Razorpay, Cloudinary, Dicebear, and all the other tools and libraries that contributed to this project's success.


