package com.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.entity.ToDo;
import com.todo.repository.ToDoRepository;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000")
public class ToDoController {
	
	@Autowired
	ToDoRepository repo;
	
	@GetMapping
	public List<ToDo> getAllToDos() {
		return repo.findAll();
	}
	
	@PostMapping
	public ToDo addToDo(@RequestBody ToDo todo) {
	    if (todo.getTitle() == null || todo.getTitle().trim().isEmpty()) {
	        throw new RuntimeException("Task title cannot be empty");
	    }
	    return repo.save(todo);
	}

	@PutMapping("/{id}")
	public ToDo updateToDo(@PathVariable int id, @RequestBody ToDo toDo) {
	    // Ensure we update the correct task
	    toDo.setId(id);
	    return repo.save(toDo);
	}

	
	@DeleteMapping("/{id}")
	private void deleteToDo(@PathVariable int id) {
		 repo.deleteById(id);

	}
	

}
