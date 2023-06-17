package com.app.auth;

import com.app.controllers.requestBody.AuthenticationRequest;
import com.app.controllers.requestBody.RegisterRequest;
import com.app.controllers.responseBody.AuthenticationResponse;
import com.app.db.entities.EducationProgramm;
import com.app.db.entities.Professor;
import com.app.db.entities.Student;
import com.app.db.entities.user.Role;
import com.app.db.entities.user.User;
import com.app.jwt.JwtService;
import com.app.repositories.CourseWorkRepository;
import com.app.repositories.DepartmentRepository;
import com.app.repositories.ProfessorRepository;
import com.app.repositories.StudentRepository;
import com.app.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService service;
    private final AuthenticationManager manager;
    private final StudentRepository studentRepository;
    private final ProfessorRepository professorRepository;
    private final DepartmentRepository departmentRepository;
    private final CourseWorkRepository courseWorkRepository;


    /**
     * не знаю каким чудом, но это работает
     * @param request Request containing all needed info to register new user
     * @return returns AuthenticationResponse object with json web token and user info
     * @throws Exception
     */
    public AuthenticationResponse register(RegisterRequest request) throws Exception {

        if(repository.existsUserByEmail(request.getEmail()))
            throw new Exception("User with this email is already registered");

        //generating new user entity and jwt
        var user = User.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .isProfessor(request.isProfessor())
            .role(Role.USER)
            .build();
        repository.save(user);
        var jwt = service.generateToken(user);

        //generating new student entity

        Student student = null;
        if (!request.isProfessor()) {
            student = Student.builder()
                .studentEmail(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .studentName(request.getName())
                .studentSurname(request.getSurname())
                .studentPatronymic(request.getPatronymic())
                .studentCourseNumber(Integer.parseInt(request.getCourse()))
                //.user(repository.findByEmail(request.getEmail()).orElseThrow())
                .build();
            studentRepository.save(student);
        }

        return AuthenticationResponse.builder()
            .jwt(jwt)
            .student(student)
            .professor(null)
            .isProfessor(request.isProfessor())
            .build();
    }



    public AuthenticationResponse login(AuthenticationRequest request) {
        manager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwt = service.generateToken(user);

        Student student = null;
        Professor professor = null;
        var isProfessor = false;

        if (professorRepository.existsProfessorByProfessorEmail(request.getEmail())) {
            professor = professorRepository.getProfessorByProfessorEmail(request.getEmail());
            isProfessor = true;
        } else {
            student = studentRepository.getStudentByStudentEmail(request.getEmail());
        }

        return AuthenticationResponse.builder()
            .jwt(jwt)
            .student(student)
            .professor(professor)
            .isProfessor(isProfessor)
            .build();
    }
}
