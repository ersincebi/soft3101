Scenario 1
Scenario name: Edit student information
Participant actor instances: Ali: Student affairs
Flow of events: 
1.	Ali enter the website on his browser.
2.	He sees the login screen. 
3.	The website asks for ali's registered user name and password.
4.	He sees the page of student affairs.
5.	Ali, click the button of students he can see all students in school and he can change information of students.
6.	He press save button after making changes.


Scenario 2
Scenario name: Requests section
Participant actor instances: Akif: Student affairs
Flow of events: 
1.	Akif enter the website on his browser.
2.	He sees the login screen. 
3.	The website asks for akif's registered user name and password.
4.	He sees the page of student affairs.
5.	Arif, clicks the notification icon on the top right corner. and the request page is displayed. At this page may approve or reject requests.He press save button after making changes.
6.	He press save button after making changes.


Scenario 3
Scenario name: Opening a course
Participant actor instances: Cem: Student affairs
Flow of events: 
1.	Cem enter the website on his browser.
2.	He sees the login screen. 
3.	The website asks for cem's registered user name and password.
4.	He sees the page of student affairs.
5.	He presses the course button on the right.
6.	He presses the plus button on this page and comes up with the lessons he can add. Clicks one of these lessons.
7.	He press save button after adding lesson.


Scenario 4
Scenario name: Adding teacher to course
Participant actor instances: Kemal: Student affairs
Flow of events: 
1.	Kemal enter the website on his browser.
2.	He sees the login screen. 
3.	The website asks for Kemal's registered user name and password.
4.	He sees the page of student affairs.
5.	He presses the course button on the right.
6.	Kemal selects any course from the page that comes in front of him.
7.	He click the add button at the bottom left of the course page.
8.	He see a list of instructors. he can add teacher from this list.
9.	He press save button after adding teacher and student to course.


Scenario 5
Scenario name: Adding student to course
Participant actor instances: Kemal: Student affairs
Flow of events: 
1.	Kemal enter the website on his browser.
2.	He sees the login screen. 
3.	The website asks for Kemal's registered user name and password.
4.	He sees the page of student affairs.
5.	He presses the course button on the right.
6.	Kemal selects any course from the page that comes in front of him.
7.	He click the add button at the bottom left of the course page.
8.	He see a list of students. he can add students from this list.
9.	He press save button after adding teacher and student to course.





Admin Scenarios

Scenario name       adminApprovesRemoveStudent 
Participation Actor instances  john:Admin, alice:StudentAffairs 
 
Flow of Events
1.John enters the website 
2.John sees login screen. 
3.John clicks log in button. 
4.John logs in. 
5.John clicks requests button. 
6.John selects approve requests. 
7.John selects students. 
8.John sees the requests. 
9.John selects the request. 
10.John sees information about request that gives information about student and class. 
11.John approves request. 
12.John clicks manage class button. 
13.John selects the class. 
14.John clicks delete a student. 
15.John selecst the student. 
16.Website sends a notification to Alice. 

 
  
Scenario name       adminApprovesDeleteStudent 
Participation Actor instances  john:Admin, alice:StudentAffairs

Flow of Events  
1.John enters the website 
2.John sees login screen. 
3.John clicks log in button. 
4.John logs in. 
5.John clicks requests button. 
6.John selects delete requests. 
7.John sees the delete requests. 
8.John selects the request. 
9.John sees information about request that gives information about student and message from Alice. 
10.John clicks approve button. 
11.John click delete user button. 
12.John selects the student. 
13.Website sends a notification to John. 

 

Scenario name       adminApprovesClassOfTeacher 
Participation Actor instances  john:Admin, alice:StudentAffairs 

Flow of Events  
1.John enters the website 
2.John sees login screen. 
3.John clicks log in button. 
4.John logs in. 
5.John clicks requests button. 
6.John selects approve requests. 
7.John selects teachers. 
8.John sees the requests. 
9.John selects the request. 
10.John sees information about request that gives information about teacher and class. 
11.John clicks approve button. 
12.John clicks manage class button. 
13.John selects the class. 
14.John clicks add a teacher. 
15.John enters the teacher’s information. 
16.Website sends a notification to Alice. 

 

Scenario name       adminApprovesClassOfStudent 
Participation Actor instances  john:Admin, alice:StudentAffairs 

Flow of Events  
1.John enters the website 
2.John sees login screen. 
3.John clicks log in button. 
4.John logs in. 
5.John clicks requests button. 
6.John selects approve requests. 
7.John selects students. 
8.John sees the requests. 
9.John selects the request. 
10.John sees information about request that gives information about student and class. 
11.John approves request. 
12.John clicks manage class button. 
13.John selects the class. 
14.John clicks add a student. 
15.John enters the student’s information. 
16.Website sends a notification to Alice. 

 

 

 

 




