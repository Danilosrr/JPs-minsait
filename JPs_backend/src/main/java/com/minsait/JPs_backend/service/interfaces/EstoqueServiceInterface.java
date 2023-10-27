package com.minsait.JPs_backend.service.interfaces;

import java.util.List;
import java.util.Optional;

import com.minsait.JPs_backend.model.Estoque;

public interface EstoqueServiceInterface {
    Estoque save(Estoque estoque);
    Optional<Estoque> getById(Long id);
    List<Estoque> getAll();
    Estoque update(Estoque estoque);
    void delete(Long id);
    Estoque addQuantidade(Long id, int quantidade);
    Estoque delQuantidade(Long id, int quantidade);
}