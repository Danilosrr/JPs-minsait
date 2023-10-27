package com.minsait.JPs_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.minsait.JPs_backend.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}