FROM openjdk:18-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/Site-with-course-works-for-BP-1.0.jar
ADD ${JAR_FILE} Site-with-course-works-for-BP.jar
ENTRYPOINT ["java","-jar","/Site-with-course-works-for-BP.jar"]